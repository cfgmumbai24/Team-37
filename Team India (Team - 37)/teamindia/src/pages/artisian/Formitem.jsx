import React from 'react'

const Formitem = (props) => {
    let {imgUrl, title}=props;
  return (
    <div>
            <div className="card">
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center h-100 w-4/5 p-4">
          <div className="flex justify-center">
            <img className="w-32 h-32" src={imgUrl} alt="Macrame Based Handicraft" />
          </div>
          <div className="px-6 py-4 justify-between">
            <div className="font-bold text-xl mb-2 text-center">{title}</div>
          </div>
          <div className="button-container">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Select</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formitem
