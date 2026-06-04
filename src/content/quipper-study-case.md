---
slug: quipper-import
route: /study/quipper-import
client: Quipper
project: Question Import
title: 179% Increase in Question Import Completion Rate in Quipper
readTime: 7~10 mins to read
role: Product Designer (Solo Designer)
roleDescription: End-to-end design process from discovery, design decision, and validation.
timeline: Jan 2025 - Sept 2025
industry: Education Technology
heroVideo: ../assets/study-case-quipper/Quipper.mp4
---

# 179% Increase in Question Import Completion Rate in Quipper

7~10 mins to read

## Media

- Hero video: `../assets/study-case-quipper/Quipper.mp4`
- Problem image: `../assets/study-case-quipper/problem-document.png`
- Early solution image: `../assets/study-case-quipper/template-example.png`
- Template design image: `../assets/study-case-quipper/template-design.png`
- GPT solution image: `../assets/study-case-quipper/gpt-solution.png`
- GPT design image: `../assets/study-case-quipper/gpt-design.png`
- GPT result image: `../assets/study-case-quipper/gpt-result.png`
- Final design image: `../assets/study-case-quipper/final-design.png`

## Overview

Quipper Link helps teachers import questions into the platform.

> Previously, teachers had to use Quipper’s fixed template. They needed to download the template, copy their questions into it, and upload the file back to Quipper. It worked, but it still required too much manual work.

> We then tested an AI-assisted flow using GPTs. This helped teachers convert their question documents faster, but the process was still not smooth. Teachers had to leave Quipper, open ChatGPT in a new tab, download the converted file, then return to Quipper to upload it.

> Instead of forcing teachers to use Quipper’s template, we allowed them to upload the question documents they already had.
>
> We then used AI to automatically convert those documents inside the platform.

### Overview Metadata

- Role: Product Designer (Solo Designer)
- Role description: End-to-end design process from discovery, design decision, and validation.
- Timeline: Jan 2025 - Sept 2025
- Industry: Education Technology

### Impact Metrics

- 179.5% completion rate improvement
- 40+ mins time saved
- Completion rate increased from 28.45% to 79.52%

## Problem

Different schools use different document formats for their questions.

This creates a problem for the system because Quipper needs clean and structured data to import questions correctly.

Image: `../assets/study-case-quipper/problem-document.png`

## Challenge

How might we standardize different school question document formats so Quipper can import them correctly?

## Early Solution

The first version focused on standardization because schools used different document formats, so Quipper needed one format that the system could understand. The template helped solve this by giving teachers a fixed structure to follow. They could fill in the required question, such as the question text, answer options, correct answer, and other details. Once the file matched Quipper’s structure, the system could import the questions.

Image: `../assets/study-case-quipper/template-example.png`

This was a reasonable first solution, but it still had a clear limitation. Teachers had to adjust their documents to fit Quipper’s format. For teachers who often created questions or already understood the template, this was still usable. But for wider usage, it required too much manual work. The main issue was that teachers still had to do the conversion work themselves.

### Early Solution Flow

1. Download Quipper’s template.
2. Open the school’s existing question document.
3. Copy the questions manually.
4. Upload the completed template.

### Early Solution Design

Image: `../assets/study-case-quipper/template-design.png`

For this solution, we did not really solve the teachers’ problem. We only created a workaround that added more work for teachers on top of their existing tasks. Since this became something mandatory in their daily work, the original problem was still there.

_Different schools use different document formats for their questions._

## New Challenge

How might we reduce the manual work teachers need to do when converting their existing question documents into Quipper’s template?

## First Solution

When AI became more common, we saw a chance to reduce the manual formatting work. Instead of asking teachers to move their questions into Quipper’s template by themselves, we tried using AI to help convert their documents. The Operations team built GPTs that could change school question documents into Quipper’s required template.

Image: `../assets/study-case-quipper/gpt-solution.png`

Then the Product Design team supported the flow by adding guidance inside Quipper so teachers could open the GPT converter, use it, then return to Quipper with the converted file.

### GPT Flow

1. Open the GPT converter
2. Use ChatGPT to convert the question document
3. Download the converted file
4. Return to Quipper
5. Upload the converted file

### GPT Design

Images:

- `../assets/study-case-quipper/gpt-design.png`
- `../assets/study-case-quipper/gpt-result.png`

This was a fast way to test whether AI could help with the question import problem, but the experience still had too much friction because teachers had to move between Quipper and ChatGPT, manage the downloaded file, and know when to return to the original tab. So even though AI helped convert the documents, the full experience was still not smooth.

The data showed this clearly through only a **28.45%** completion rate. There was **78%** bounce rate on the guide page.

This showed that the guide alone was not enough because the real issue was the steps asking teachers to switch between too many places to finish one task.

### Learning

The GPT experience helped us learn something important because AI could help fix the document conversion problem, but sending teachers outside Quipper created another problem. Teachers still had to read the guide then use the GPT then download the converted file then go back to Quipper and upload the right file. This made the real problem clearer because we did not only need AI to convert the document.

We need a smoother experience that allows users to upload their own question documents into Quipper.

## New Challenge

How might we bring AI conversion directly into Quipper so teachers can upload their question document and complete the import process in one place?

## Final Solution

AI integration baked directly into Import Question.

The final solution brings AI directly into the import flow so teachers no longer need to download a Quipper template first or open ChatGPT in another tab. Instead they can upload their own question document directly inside Quipper and the system will use AI to convert it into the format Quipper needs for the question database.

This is important because the real problem came from different school document formats.

### Final Flow

1. Upload existing question document
2. AI converts the document inside Quipper
3. Teacher reviews or edits the result if needed
4. Import questions into Quipper

### Final Design

Image: `../assets/study-case-quipper/final-design.png`

## Final Result

After integrating AI directly into the import question flow, the completion rate increased to **79.52%**.

This showed that teachers were much more likely to finish the import process when AI conversion happened directly inside Quipper.

Video: `../assets/study-case-quipper/Quipper.mp4`

Caption: New Design Flow

## Reflection

This project showed that a solution can be useful but still hard to finish if teachers have to switch between too many places.

The main lesson was that AI works better when users do not have to manage it on their own.

## Closing

Thank You!
