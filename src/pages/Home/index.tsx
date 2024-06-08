import FullPageCenteredMessage from '@/components/FullPageCenteredMessage';
import FullPageLoader from '@/components/FullPageLoader';
import NewsGrid from '@/components/NewsGrid';
import SearchArticlesFilters from '@/components/SearchArticlesFilters';
import ErrorBoundary from '@/components/errors/ErrorBoundary';
import { ReactQueryKeyEnum } from '@/enums/reactQuery';
import { useGetRequest } from '@/hooks/reactQuery';
import { searchedNewsArticlesRStateAtom } from '@/state/newsArticles';
import { IApiResponse } from '@/types/backendApi';
import { INewsArticlesApiResponse } from '@/types/backendApi/newsArticlesBackend';
import { ISearchArticlesFiltersSearchParams } from '@/types/searchParams';
import { API_URLS } from '@/utils/constants';
import { reactQueryOptions } from '@/utils/constants/reactQuery';
import { addQueryParamsInUrl, getSearchParamsData } from '@/utils/helpers';
import { formatNewsArticlesData } from '@/utils/helpers/reactQuery/newsArticlesBackend';
import { showErrorNotification } from '@/utils/helpers/reactToastify';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const Home: React.FC = () => {
	const location = useLocation();
	const [searchedNewsArticlesRState, setSearchedNewsArticlesRState] =
		useRecoilState(searchedNewsArticlesRStateAtom);
	const [_searchParams] = useSearchParams();
	const _searchParamsData =
		getSearchParamsData<ISearchArticlesFiltersSearchParams>(_searchParams);
	const _updatedUrl = addQueryParamsInUrl(
		API_URLS.searchNewsArticles,
		_searchParamsData
	);
	const {
		data: response,
		isFetching,
		isError,
		refetch,
	} = useGetRequest(
		_updatedUrl,
		ReactQueryKeyEnum.searchNewsArticles,
		true,
		reactQueryOptions.staleTime.fiveMinutes
	);

	useEffect(() => {
		try {
			if (!isFetching && !isError) {
				if (response && response.data) {
					const _res = JSON.parse(
						response.data
					) as IApiResponse<INewsArticlesApiResponse>;
					const _newsArticles = _res.result?.data;

					if (_newsArticles) {
						const formattedNewsArticles = formatNewsArticlesData(_newsArticles);
						setSearchedNewsArticlesRState(formattedNewsArticles);
					}
				}
			}
		} catch (error) {
			showErrorNotification();
		}
	}, [response, isFetching, isError]);

	useEffect(() => {
		refetch({
			cancelRefetch: true,
		});
	}, [location.search]);

	if (isFetching) {
		return <FullPageLoader />;
	} else if (isError) {
		return (
			<FullPageCenteredMessage message='Error Occurred while fetching news articles, try again later.' />
		);
	} else if (response && response.data) {
		return (
			<>
				<SearchArticlesFilters />
				<NewsGrid newsArticles={searchedNewsArticlesRState} />
			</>
		);
	} else {
		return <ErrorBoundary />;
	}
};

export default Home;