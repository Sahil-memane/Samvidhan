"use client";
import AmendmentAllowance from '@/components/admin/AmendmentAllowance';
import ManageArticles from '@/components/admin/ManageArticles';
import SideBar from '@/components/admin/SideBar';
import DatasetCombine from '@/components/admin/DatasetCombine';
import DatasetGenrator from '@/components/admin/DatasetGenrator';
import MarkdownConverter from '@/components/admin/MarkdownConverter';
import ModelPretraining from '@/components/admin/ModelPretraining';
import VrConvertor from '@/components/admin/VrConvertor';

import {useEffect, useState} from 'react';

export default function page() {

    const [page, setPage] = useState('dataset-genrator');

    return (
        <SideBar page={page} setPage={setPage}>
            
            {page === 'vr-convertor' &&
                <VrConvertor />
            }
        </SideBar>  
    )
}
