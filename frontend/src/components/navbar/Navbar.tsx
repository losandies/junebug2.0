import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const Navbar: FC = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchInput(e.currentTarget.value);
    };

    const submitSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(searchInput);
    };

    return (
        <div className="fixed h-16 w-full flex items-center px-10">
            <div className="w-full flex justify-between">
                <Button variant={"ghost"}>
                    <Link to="/">Guidely</Link>
                </Button>
                <div className="flex">
                    <div>
                        {/* TODO onClick submit search */}
                        <form
                            className="flex w-72 items-center relative"
                            onSubmit={submitSearch}
                        >
                            <button
                                className="absolute right-3"
                                onClick={submitSearch}
                            >
                                <Search className="" />
                            </button>
                            <Input
                                placeholder="Search for mentors..."
                                className="pr-10"
                                onChange={onChange}
                            />
                        </form>
                    </div>
                    <div className="flex">
                        <Button variant={"secondary"} className="ml-4 px-7">
                            Sign In
                        </Button>
                        <Button className="ml-4 px-6">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
