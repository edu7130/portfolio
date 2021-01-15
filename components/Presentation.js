export default function Presentation(props){
    const { name, profession, logoUrl} = props.content;
    
    

    return(
        <div id="presentation">
            <div className="background">
                <header className="container">
                    <img className="logo" src={logoUrl}  alt="logo"/>
                    <h1 className="name">{name}</h1>
                    <p className="description">{profession}</p>
                    
                </header>
            </div>
            
        </div>
    );
}