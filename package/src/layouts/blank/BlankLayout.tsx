import { Outlet } from "react-router";
import LoadingBar from 'src/LoadingBar';

const BlankLayout = () => (
  <>
    <LoadingBar />
    <Outlet />
  </>
);

export default BlankLayout;
