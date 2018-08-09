import { ajax } from 'rxjs/ajax'
import { of, from } from 'rxjs'
import { filter, map, tap, delay } from 'rxjs/operators'
import * as R from 'ramda'
import { mock } from './mock' 
export const fetchData = (
    url,
    method='GET',
    body,
    responseType='json',
    headers={
    'Content-Type': 'application/json'
    }
) => of({ response: mock }).pipe(
    delay(1000)
)
// TODO Add a swithMap here to r