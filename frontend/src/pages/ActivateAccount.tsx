import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ActivateAccount: FC = () => {
    const { uid, token } = useParams();

    const navigate = useNavigate();

    const body = {
        uid,
        token,
    };

    const onClick = async () => {
        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/auth/users/activation/`,
                body
            );

            navigate("/login");
        } catch (err: unknown) {
            if (err instanceof Error) {
                alert(err.message);
            } else {
                alert("An unknown error occurred.");
            }
        }

        navigate("/login");
    };
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>Activate your account!</CardTitle>
                    <CardDescription>
                        Are you ready to find your dream mentor?
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button size={"full"} onClick={onClick}>
                        Activate
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default ActivateAccount;
