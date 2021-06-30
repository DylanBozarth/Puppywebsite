import React from 'react'
import useTitle from "../hooks/useTitle";
import PuppySeg from "../component/puppyseg";
import Instafeed from "../component/instafeed";
import "./frontpage.scss"
import NewKenburns from '../newcomponents/newKenburns';
import { FrontpageHalf } from '../newcomponents/frontPageHalf';
export const FrontPage = () => {
    useTitle("JYMR Doodles");
return (
    <div className="frontPage">
        <div className="kenBox row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8"><NewKenburns /></div>

<div className="col-sm-2"></div>
</div>
<FrontpageHalf />
    </div>
)
}