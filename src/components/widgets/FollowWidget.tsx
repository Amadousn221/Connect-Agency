import SocialShareV5 from '../social/SocialShareV5';

const FollowWidget = () => {
    return (
        <>
            <div className="sidebar-item social-sidebar">
                <h4 className="title">follow us</h4>
                <div className="sidebar-info">
                    <ul>
                        <SocialShareV5 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FollowWidget;