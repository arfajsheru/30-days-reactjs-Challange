const DisplayInput = ({setWeightTab,setHeightTab}) => {
 
    return <div>
         <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Weight (ibs)
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter a weight"
      
     
            onChange={(evnet) => setWeightTab(evnet.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Hight (in)
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter a weight"
           
            onChange={(evnet) => setHeightTab(evnet.target.value)}
          />
        </div>
    </div>
}

export default DisplayInput;