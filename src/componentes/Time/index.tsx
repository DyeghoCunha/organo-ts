import Colaborador from '../Colaborador'
import { IColaborador } from '../shared/interfaces/IColaborator'
import './Time.css'

interface TimeProps{
corPrimaria: string
nome: string
colaboradores: IColaborador[]
corSecundaria:string
}

const Time = (props:TimeProps) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                <Colaborador 
                corDeFundo={props.corPrimaria} 
                key={colaborador.nome} 
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem}
                data={colaborador.data}
                /> )}
            </div>
        </section> 
        : <></>
    )
}

export default Time