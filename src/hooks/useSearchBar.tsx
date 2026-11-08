"use client"
import { useState } from 'react';

const useSearchBar = () => {
    const [openSearch, setOpenSearch] = useState(false);

    const searchOpen = () => {
        setOpenSearch(true);
    }

    const searchClose = () => {
        setOpenSearch(false);
    }

    return { openSearch, searchOpen, searchClose }
};

export default useSearchBar;