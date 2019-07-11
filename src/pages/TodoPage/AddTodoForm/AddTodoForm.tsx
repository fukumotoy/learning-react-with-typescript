import React, { ChangeEvent, FC, SyntheticEvent, useState } from 'react';

interface Props {
  onAdd: (content: string) => void;
}

const AddTodoForm: FC<Props> = ({ onAdd }: Props): JSX.Element => {
  const [content, setContent] = useState<string>('');

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!content) {
      return;
    }

    onAdd(content);
    setContent('');
  };

  return (
    <form className="AddTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={content}
        onChange={({ target }: ChangeEvent<HTMLInputElement>): void => {
          setContent(target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
