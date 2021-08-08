export default function Layout(){
    return(
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    )
}