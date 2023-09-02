export const metadata = {
    title: 'Articles Page',
}
export default function ({children}){
    return(
        <div>
            <h1>Articles</h1>
            
            <div style={{
                marginTop: "50px", 
                backgroundColor: "red", 
                padding: "20px", 
                borderRadius: "10px"
            }}>
                {children}
            </div>
        </div>
    )
}