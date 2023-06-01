import { Input } from '@nextui-org/react';

const SymbolFilter = ({handleSymbolChange}) => {
    return <Input onChange={handleSymbolChange} label="Stock Symbol" placeholder="SPUS" /> ;
}

export default SymbolFilter