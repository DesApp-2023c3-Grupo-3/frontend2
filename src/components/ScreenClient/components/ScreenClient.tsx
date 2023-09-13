import Informacion from './Informacion';
import Comisiones from './Comisiones';


function ScreenClient() {

  return (
    <main className='bg-[#D9D9D9] h-screen grid grid-cols-12'>
      <Informacion />
      <Comisiones />
    </main>
  );
}

{/* <div>
<h1>ScreenClient</h1>
<h3>{natsConnection ? 'CONNECTED' : 'NOT CONNECTED'}</h3>
<h5>{`ws://${HOST}:${PORT}`}</h5>
  {messages.map((message: any) => <div key={message.id}>
  <h5>{message.data}</h5>
</div>)}
</div> */}


export default ScreenClient;
