import * as React from 'react';
import {SimpleCell} from "@vkontakte/vkui";
import {GetCurrenciesTickerModel} from "../../../store/models/currency";
import ListCurrenciesTicker from "./ListCurrenciesTicker";
import CurrenciesMathFloor from "../../../utils/utils";


type Props = {
    repo?: GetCurrenciesTickerModel;
    loading?: boolean;
};

const RepoCard: React.FC<Props> = ({ repo, loading = false }: Props) => {
    debugger;
    console.log('repo',repo?.name)
    return (
            <SimpleCell key={repo?.id}>
                <>
                    {repo?.name} {repo?.price}
                    </>
            </SimpleCell>)
       /* <Card hoverable actions={actions}>
    <Skeleton loading={loading} avatar active>
    <Card.Meta
        avatar={
        <Popover title={repo?.owner?.login}>
    <Avatar src={repo?.owner?.avatarUrl} />
    </Popover>
}
    title={repo?.name}
    description={
        repo && (
        <>
            {repo.description}
        <br />
        -----
            <br />
        {formatDateDDMMYYYY(repo.pushedAt)}
    </>
)
}
    />
    </Skeleton>
    </Card>*/
};

export default RepoCard;
