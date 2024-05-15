

const RecommendationTable = ({reco,handleDelete}) => {
    const {recommendationName,recommendationUrl,recommendationTitle,recommendationReason,currentDate,_id,queryId} =reco
    return (
       
            <div className="overflow-x-auto">
  <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={recommendationUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{recommendationName}</div>
              <div className="text-sm opacity-50">{currentDate}</div>
            </div>
          </div>
        </td>
        <td>
        {recommendationTitle.slice(0,15)}
        </td>
        <td></td>
        <th>
          <button onClick={()=>handleDelete(_id,queryId)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
</div>
            
        
    );
};

export default RecommendationTable;

