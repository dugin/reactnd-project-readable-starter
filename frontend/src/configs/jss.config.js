import {create} from "jss";
import preset from "jss-preset-default";
import createGenerateClassName from "material-ui/styles/createGenerateClassName";

// Inject the insertion-point-jss at the beginning.
if (!global.__INSERTION_POINT__) {
    global.__INSERTION_POINT__ = true;
    const styleNode = document.createComment("insertion-point-jss");

    if (document.head) {
        document.head.insertBefore(styleNode, document.head.firstChild);
    }
}

const generateClassName = createGenerateClassName();

const jss = create(preset());
jss.options.insertionPoint = "insertion-point-jss";

export {generateClassName, jss};