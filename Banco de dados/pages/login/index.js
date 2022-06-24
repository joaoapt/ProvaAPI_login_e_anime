import './index.scss'

export default function Index() {

    return(
        <main className='login'>
                  <div>
                    <div>
                        <label>E-mail:</label>
                        <input type='text' placeholder='Informe seu e-mail'/>
                    </div>
                    <div >
                        <label>Senha:</label>
                        <input type='password' placeholder='***' />
                    </div>
                    <div>
                        <button>ENTRAR</button> 
                    </div>
                    <div>
                        
                    </div>
                </div>
        </main>
    )
}