import { JSONObject } from 'tiny-types';
import { Artifact } from '../Artifact';

export class TestReport extends Artifact {

    static fromJSON(value: JSONObject) {
        return new TestReport(Buffer.from(JSON.stringify(value, null, 0), 'utf8').toString('base64'));
    }

    map<O>(fn: (decodedValue: JSONObject) => O): O {
        return fn(JSON.parse(Buffer.from(this.base64EncodedValue, 'base64').toString('utf8')));
    }
}
