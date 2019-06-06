export class report {
    appUser_id: number;
    report_info: {
        query_id: null;
        report_id: string;
        response_time: number;
        proxy_flags: [];
    }
    bvids: [];
    names: [
        {
            full: string;
            parts: {
                salutation: string;
                first_name: string;
                middle_name: string;
                last_name: string;
                suffix: string;
            }
            first_seen: string;
            last_seen: string;
        }
    ]
    addresses: [
        {
            latitude: number;
            longitude: number;
            precision: string;
            property_record_available: null;
            full: string;
            parts: {
                house_number: string;
                pre_direction: string;
                street_name: string;
                street_type: string;
                post_direction: string;
                unit: string;
                city: string;
                state: string;
                zip: string;
                zip4: string;
                country: string;
            };
            type: string;
            first_seen: string;
            last_seen: string;
        }
    ]
    dob: string;
    gender: string;
    emails: [
        {
            email_address: string;
            type: string;
            address_md5: string;
            is_disposable: boolean;
            is_public_provider: boolean;
            first_seen: string;
            last_seen: string;
        }
    ]
    phones: [
        {
            number: number;
            type: string;
            first_seen: string;
            last_seen: string;
            country_code: number;
        }
    ]
    jobs: [];
    educations: [];
    images: [];
    social: [];
    user_ids: [];
    usernames: [];
    languages: [
        {
            language: string;
            region: string;
        }
    ]
    ethnicities: [];
    origin_countries: [];
}