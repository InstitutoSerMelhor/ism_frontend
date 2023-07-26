import React from 'react'

const Project = ({ params }: { params: { slug: string } }) => {
    // também podemos utilizar o useParams() para pegar o parâmetro da rota 👆
    return (
        <div>Projeto - {params.slug}</div>
    )
}

export default Project