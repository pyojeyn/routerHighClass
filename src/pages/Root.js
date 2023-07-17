import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
// useNavigation : 이걸 사용해서 우리는 현재 전환이 진행 중인지 데이터를 로딩하는 중인지, 또는 전환이 진행되지 않고 있는지 알 수 있습니다 


function RootLayout() {

  const navigation = useNavigation();

  //navigation.state === '' // state 는 idle, loading, submitting 중에 하나다.
  


  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
