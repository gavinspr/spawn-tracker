import React, { useState, useEffect, useContext } from "react";
import { supabase } from "../../services";
import { Session } from "@supabase/supabase-js";
import SessionContext from "./SessionContext";
import { SessionContextType } from "../../@types";
import { AuthStackNavigator } from "../../navigation";

type Props = {
  children: React.ReactNode;
};

export const useSessionContext = () =>
  useContext(SessionContext) as SessionContextType;

export const SessionProvider = ({ children }: Props) => {
  const [user, setUser] = useState<boolean | null>(null); // todo
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <SessionContext.Provider
      value={{
        user,
        session,
      }}
    >
      {session && session.user ? children : <AuthStackNavigator />}
    </SessionContext.Provider>
  );
};
