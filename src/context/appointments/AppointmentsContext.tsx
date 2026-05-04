import React, { createContext, useReducer } from "react";
import reducer, { IInitialState } from "./reducers";
import { ActionsTypes } from "./actions";
import useAppointmentService from "../../services/AppointmentService";

interface ProviderProps {
    children: React.ReactNode;
}

interface AppointmentContextValue extends IInitialState {
    getAppointments: () => void;
}

const initialState: IInitialState = {
    allAppointments: [],
    activeAppointments: [],
};

export const AppointmentContext = createContext<AppointmentContextValue>({
    allAppointments: initialState.allAppointments,
    activeAppointments: initialState.activeAppointments,
    getAppointments: () => {},
});

const AppointmentContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { loadingStatus, getAllAppointments, getAllActiveAppointments } =
        useAppointmentService();

    const value: AppointmentContextValue = {
        allAppointments: state.allAppointments,
        activeAppointments: state.activeAppointments,
        getAppointments: () => {
            getAllAppointments().then((data: any) =>
                dispatch({
                    type: ActionsTypes.SET_ALL_APPOINTMENTS,
                    payload: data,
                }),
            );
        },
    };

    return (
        <AppointmentContext.Provider value={value}>
            {children}
        </AppointmentContext.Provider>
    );
};

export default AppointmentContextProvider;
