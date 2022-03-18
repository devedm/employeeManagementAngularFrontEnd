export namespace EmployeeNamespace {
    export enum UserType {
        COLABORADOR = 'COLABORADOR',
        JEFE = 'JEFE',
        GERENTE = 'GERENTE'
    }
    export enum StatusType {
        ACTIVE = 'ACTIVE',
        CHANGED = 'CHANGED'
    }
    export interface EmployeeResponseModel {
        data: Array<BodyResponseModel>,
        page: PageResponseModel
    }
    export interface BodyResponseModel {
        uuid: string,
        email: string,
        full_name: string,
        vacation_days: number,
        user_type: UserType,
        user_password: string,
        status: StatusType
    }
    export interface PageResponseModel {
        total: number,
        pages: number,
        offset: number,
        limit: number
    }
}