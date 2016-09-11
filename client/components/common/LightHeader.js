import React from 'react'

let styles = {
    container: {
        marginTop: '15px',
        marginBottom: '15px',
    },
    header: {
        paddingLeft: '15px'
    },
    hr: {
        clear: 'both'
    }
}
class LightHeader extends React.Component {
    render () {
        return (
            <div style={styles.container} className="clearfix header-small">
                <hr style={styles.hr}/>
                <h3 style={styles.header} className="text-center">{this.props.text}</h3>
                <hr style={styles.hr}/>
            </div>
        )
    }
};

export default LightHeader;
