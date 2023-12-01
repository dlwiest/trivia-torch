interface FormGroupProps extends React.ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode;
    fieldId?: string;
    label?: string;
}

const FormGroup = ({ children, fieldId, label }: FormGroupProps) => (
    <div>
        {label &&
            <label htmlFor={fieldId} className="block text-sm font-medium leading-6">
                {label}
            </label>
        }

        <div className="mt-1">
            {children}
        </div>
    </div>
);

export default FormGroup;