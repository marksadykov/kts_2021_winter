import {Spinner} from "@vkontakte/vkui";

const Loading = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Spinner size="medium" style={{ margin: '20px 0' }} />
        </div>

    )
}

export default Loading;
