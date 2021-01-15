export default function Footer(props){
    const{ year, copyright } = props.content;
    
    return(
        <div id="footer">
            <div className="container">
                <p className="copyright">Copyright &copy; {year} {copyright}</p>
                
            </div>
        </div>
    )
}