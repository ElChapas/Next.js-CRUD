import Head from "next/head";
import FormCard from "../components/Form/FormCard";
import SearchCard from "../components/Search/SearchCard";

export default function Home({ isConnected }) {
    return (
        <div className="container">
            <h1 className="title">Next.js CRUD v1</h1>
            <div className="grid-container">
                <FormCard />
                <SearchCard />
            </div>
        </div>
    );
}
