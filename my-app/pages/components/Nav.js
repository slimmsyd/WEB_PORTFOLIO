import styles from '../../styles/Nav.module.css'

export default function Navbar({accountAddress, isConnected, connect}) 
{ 
    
    function notReady() { 
        window.alert("Articles in work in progres")
    }

    const returnAddress = () =>  { 

        if(isConnected === true) { 
            return( 
                <a href = "#" className = {styles.href}>{accountAddress}</a>
            )
        }else { 
            return(
                <a onClick={connect}  className = {styles.href}>Connect Wallet</a>
            )
        }
    }

    
    return ( 
    
        <div className = {styles.divWrapper}>

        <nav className = {styles.nav}>
          
            <div className = {styles.navContainer}>
                <a href = "https://www.youtube.com/channel/UCC8yLhVL7lThf295DtD4rag/videos"className = {styles.href}>Youtube</a>
                <a href = "https://created2grow.com" className = {styles.href}>Business</a>
                <a href = "../public/assets/Sydney_SandersResume" download className = {styles.href}>Resume</a>
                   {returnAddress()}

            </div>
        </nav>


    </div>

    )
   


}