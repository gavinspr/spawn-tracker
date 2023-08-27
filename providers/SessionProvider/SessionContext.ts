import { createContext } from "react";
import { SessionContextType } from "../../@types";

const SessionContext = createContext<SessionContextType | null>(null);

export default SessionContext;
