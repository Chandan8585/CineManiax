// import React from "react";
import "./contentWrapper.scss"

// const ContentWrapper = ({children}) => {
//     return <div className="ContentWrapper">
//         {children}
//     </div>
// }

// export default ContentWrapper;



import React from "react";

// import "./style.scss";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;