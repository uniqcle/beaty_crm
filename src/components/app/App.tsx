import Header from "../header/Header";
import SchedulePage from "../../pages/schedule/SchedulePage";
// import HistoryPage from "../../pages/history/HistoryPage";
// import CancelModal from "../modal/CancelModal";
import "./app.scss";
import { useEffect } from "react";
import useAppointmentService from "../../services/AppointmentService";
import { IInitialState } from "../../context/appointments/reducers";

const initialState: IInitialState = {
    allAppointments: [],
    activeAppointments: [],
};

function App() {

	const { loadingStatus, getAllAppointments, getAllActiveAppointments } =
        useAppointmentService();

    useEffect(() => {
        getAllAppointments().then((data: any) => console.log(data));
    }, []); 

	return (
		<main className="board">
			<Header />
			<SchedulePage />
			{/* <HistoryPage /> */}
			{/* <CancelModal /> */}
		</main>
	);
}

export default App;
