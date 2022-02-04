import React from 'react';


class MyProfileForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <form>
                        <label>NAME
                            <input></input>
                        </label>
                        <label>EMAIL
                            <input></input>
                        </label>
                        <label>PHONE
                            <input></input>
                        </label>
                    </form>
                </div>
                <div>
                    <button>DELETE ACCOUNT</button>
                </div>
            </div>
        )
    }
}

export default MyProfileForm;