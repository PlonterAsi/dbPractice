function removeBranch(e) {
    e.currentTarget.parentNode.parentNode.parentNode.remove();
}

export function NewBranch({ index, branch, changeBranchValue }) {
    return (
        <div id="branch_item">
            <label htmlFor="new_rest_branch_city">city: </label>
            <input
                name="city"
                type="text"
                placeholder="New branch city location"
                id="info_item"
                className="new_rest_branch_city"
                required
                value={branch.city}
                onChange={e => changeBranchValue(index, e.target.name, e.target.value)}
            ></input>

            <div>{branch.city}</div>
        </div>
    )

    // return (
    //     <div id="branch_from">
    //         <div id="branch-inside-right">
    //             <div id="branch_item">
    //                 <label htmlFor="new_rest_branch_city">city: </label>
    //                 <input
    //                     type="text"
    //                     placeholder="New branch city location"
    //                     id="info_item"
    //                     className="new_rest_branch_city"
    //                     required
    //                     value={props.branch.city}
    //                     onChange={e => changeBranchValue(index, e.target.name, e.target.value)}
    //                 ></input>
    //             </div>

    //             <div id="branch_item">
    //                 <label htmlFor="new_rest_branch_street">street: </label>
    //                 <input
    //                     type="text"
    //                     placeholder="New branch street location"
    //                     id="info_item"
    //                     className="new_rest_branch_street"
    //                     required
    //                     value={props.branch.street}
    //                 ></input>
    //             </div>
    //         </div>

    //         <div id="branch-inside-left">
    //             <div id="branch_item">
    //                 <label id="insdie_branch_from" htmlFor="new_rest_branch_street_number">
    //                     street number:{" "}
    //                 </label>
    //                 <input
    //                     type="text"
    //                     placeholder="New branch street number"
    //                     id="info_item"
    //                     className="new_rest_branch_street_number"
    //                     required
    //                     value={props.branch.street_number}
    //                 ></input>
    //             </div>

    //             <div id="branch_item">
    //                 <label id="insdie_branch_from" htmlFor="new_rest_branch_phone_number">
    //                     phone number:{" "}
    //                 </label>
    //                 <input
    //                     type="text"
    //                     placeholder="New branch phone number"
    //                     id="info_item"
    //                     className="new_rest_branch_phone_number"
    //                     required
    //                 ></input>
    //             </div>
    //         </div>
    //         <div id="delete_branch_div">
    //             <button
    //                 type="button"
    //                 id="delete_branch_btn"
    //                 onClick={removeBranch}
    //             >
    //                 x
    //             </button>
    //         </div>
    //     </div>
    // )
}