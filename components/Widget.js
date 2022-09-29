import { useState } from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css';

const Widget = ({ pageName }) => {
    const [active, setActive] = useState(false);

    if (active) {
        return (
            <div className={styles.container}>
                <Head>
                    <title>You're browsing the {pageName} page</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className={styles.grid}>
                    <div style={{ marginTop: '10px' }}>
                        <button onClick={() => setActive(false)}>
                            Restore original title
                        </button>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div style={{ marginTop: '10px' }}>
                        <h3>Take a look at the title</h3>
                    </div>
                </div>
                
            </div>
        );
    }

    return (
        <div className={styles.container}>

            <div>
                <button onClick={() => setActive(true)}>
                    Change page title
                </button>
            </div>
            
        </div>
        
    )
}

export default Widget;