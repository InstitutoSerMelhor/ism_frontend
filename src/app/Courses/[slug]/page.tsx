import React from 'react'

const Course = ({ params }: { params: { slug: string } }) => {
    // também podemos utilizar o useParams() para pegar o parâmetro da rota 👆
    return (
        <div>Curso - {params.slug}</div>
    )
}

export default Course