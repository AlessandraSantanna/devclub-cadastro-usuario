import PropTypes from 'prop-types'
import {Button} from './styles'

function DefaultButton({children, theme, ...props}){
//... spread operator -> todo o resto
   
        return(
            <Button{...props} theme = {theme}>{children}</Button>

        )

}

DefaultButton.propTypes={
    children:PropTypes.node.isRequired,
    theme:PropTypes.string
}
export default DefaultButton

