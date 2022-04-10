import PropTypes from 'prop-types';

function Profile(props) {
    return(
        <div style={{margin: 50}}>
            <div >
                {props.children}
            </div>
            <div>
                <div>{props.name}</div>
                <div>{props.bio}</div>
                <div>{props.profession}</div>
            </div>
            <div>
                <button onClick={props.handleName} >click me</button>
            </div>
        </div>
    )    
};

Profile.defaultProps={
    name:'username',
    bio:'description',
    profession:'profession',
    children:'image'
}

Profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string

  };
export default Profile;