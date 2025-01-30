from http.server import HTTPServer as BaseHTTPServer, SimpleHTTPRequestHandler
import os

PORT_NUM = 8094
class HTTPHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        path = SimpleHTTPRequestHandler.translate_path(self, path)
        relpath = os.path.relpath(path, os.getcwd())
        fullpath = os.path.join(self.server.base_path, relpath)
        return fullpath


class HTTPServer(BaseHTTPServer):
    def __init__(self, base_path, server_address, RequestHandlerClass=HTTPHandler):
        self.base_path = base_path
        BaseHTTPServer.__init__(self, server_address, RequestHandlerClass)


web_dir = os.path.join(os.path.dirname(__file__), '')
httpd = HTTPServer(web_dir, ("", PORT_NUM))
httpd.serve_forever()

'''
note:
> index.html points to webpack bundled js source file
> following cmd builds and runs the server on port port_num
> npx nodemon --watch css/**/*.css --watch src/**/*.js --watch src/**/*.tsx --exec "npm run build && python3 ./run.py"
> longer version of this cmd (not used for now):
> npx nodemon --watch css/**/*.css --watch src/**/*.js --watch src/**/*.jsx --watch src/**/*.ts --watch src/**/*.tsx --exec "npm run build && python3 ./run.py"
> project uses both api endpoint for retrieving github api-data, and npx json-server
> the latter can be removed after testing is fully done, or can be added for compat in dev-mode

'''