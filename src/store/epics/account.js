import { of, merge, from } from 'rxjs'
import { ofType } from 'redux-observable';
import { filter, mapTo, switchMap, mergeMap, map, flatMap } from 'rxjs/operators';
import { fetchData } from '../../utils'

export const getListAccounts = (action$, store) => action$.pipe(
    ofType('WILL_LOAD_LIST'),
    switchMap(() => 
        fetchData({
                    // this still a mock
                    url: 'https://dev-api.stefanini-spark.com/accounts?pageSize=5'
                }).pipe(
                    map(({ response }) => ([
                        {
                            type: 'OPEN_FORM',
                            form: 'list',
                        }
                        ,{
                        type: 'REQUEST_FULFILLED',
                        on: 'list',
                        data: response,
                    }])),
                    flatMap(from)
                )
    )
)
