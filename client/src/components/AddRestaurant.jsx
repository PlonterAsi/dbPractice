import { NavLink, Outlet, useSearchParams } from "react-router-dom"
import { useState } from "react";
import { NewBranch } from "./NewBranch";

// function addNewBranch() {
//     const _branches = branches;
//     _branches.push(
//         <li key={branches.length} id="branches_li">
//             <window.NewRestaurantBranch />
//         </li>
//     );
//     this.setState({ branches: branches });
// }


const tmpl = {
    city: ''
}

export function AddRestaurant() {
    const [branches, setBranchs] = useState([])
    const addNewBranch = () => {
        // branches.push()
        setBranchs([...branches, { ...tmpl }])
        console.log(branches)
    }
    const changeBranchValue = (index, name, value) => {
        const newBranches = [...branches]
        newBranches[index][name] = value
        setBranchs(newBranches)
    }
    return (
        <form>
            <div id="branch_item" required>
                <div id="branch_item">
                    <label htmlFor="new_rest_name">name: </label>
                    <input
                        type="text"
                        className="inline"
                        placeholder="New restaurant name"
                        id="new_rest_name"
                        required
                    />
                </div>

                <div id="branch_item">
                    <label htmlFor="new_rest_phone">phone number: </label>
                    <input
                        type="text"
                        className="inline"
                        placeholder="New restaurant phone number"
                        id="new_rest_phone"
                        required
                    />
                </div>
            </div>

            <div>
                <ul id="branches">
                    {branches.map((branch, index) => {
                        return (
                            <li key={index}>
                                <NewBranch
                                    index={index}
                                    branch={branch}
                                    changeBranchValue={changeBranchValue}
                                />
                            </li>
                        )
                    })}
                </ul>
                <button type="button" onClick={addNewBranch}>
                    Add new branch
                </button>
            </div>

            <button type="submit">Submit new restaurant</button>
            <Outlet />
        </form>
    )
}
