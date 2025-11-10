
export class ManageResponse {


    static sucess(data: any, message = 'Operacion Existosa') {

        return {
            success: true,
            message,
            data

        }

    }

    static error(error: any, message = 'Error en la operacion') {

        return {
            success: false,
            message,
            error

        }


    }





}