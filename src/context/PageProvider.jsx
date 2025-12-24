import { useState } from "react";
import PageContext from "./PageContext";

function PageProvider({children}) {
    const [pageIndex, setPageIndex] = useState(0)
    const pages = ["/", "login", "signup", "profile"]


    return (
        <PageContext.Provider value={
            { pages, pageIndex, setPageIndex }
        }>
            {children}
        </PageContext.Provider>
    )
}

export default PageProvider;