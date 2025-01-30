var path = require('path')

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /^(?!.*\.native\.(js|jsx|ts|tsx)$).*\.(js|jsx|ts|tsx)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'src/components'),
                    path.resolve(__dirname, 'src/components/common'),
                    path.resolve(__dirname, 'src/components/first_blog')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                            ['@babel/preset-react', { runtime: 'automatic' }],
                            ['@babel/preset-typescript']
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'css'),
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    }
                ]
            }
        ]
    }
}