import "../scss/index.scss";
import {UsersProvider} from '../context/UsersContext'
export default function App({ Component, pageProps }) {
    return (
        <UsersProvider>
            <Component {...pageProps} />
        </UsersProvider>
    ) 
}
