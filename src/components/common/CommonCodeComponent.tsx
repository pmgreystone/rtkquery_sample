import "../../../css/styles.css"
import "../../../css/index.css"

interface CodeProps {
    content: string
    space?: number
}
const CommonCodeComponent = (props: CodeProps & React.HTMLAttributes<HTMLElement>) => {

    const className = props.space ? `codeSpace${props.space}` : 'codeSpace'
    
    function classNames(first: string): string {
        if (props.className) {
            let names = props.className!.split(' ')
            names.unshift(first)
            return names.join(' ')
        }
        return first
    }

    return (
        <code className={classNames(className)}>{props.content}</code>
    )
}

export default CommonCodeComponent