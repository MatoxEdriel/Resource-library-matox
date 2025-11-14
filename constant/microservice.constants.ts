export const INVOICE_CMD = {
    CREATE: { cmd: 'create_invoice' },
    FIND_ALL: { cmd: 'find_all_invoices' },
    FIND_ALL_WITH_TRACKS: { cmd: 'find_all_invoices_with_tracks' },
    GENERATE_PDF: { cmd: 'generate-pdf' }

}

export const CUSTOMER_CMD = {
    CREATE: { cmd: 'createCustomer' },
    FIND_ALL: { cmd: 'findAllCustomers' },
    FIND_ONE_CUSTOMER: { cmd: 'findOneCustomer' },
    UPDATE: { cmd: 'updateCustomer' },
    DELETE: { cmd: 'removeCustomer' }
}



